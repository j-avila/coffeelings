import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

const TextEditor = ({ data }: { data: any }) => {
  const [dataDay, setDataday] = useState({
    id: 0,
    date: '',
    message: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [txtStyles, setTxtStyles] = useState(
    'bg-[#D9A17E] h-[30vh] w-[100%] my-4 rounded-md p-4 outline-none focus:ring-0',
  );
  const notify = (msg: string) => toast(msg);
  const getDayName = (date: string) => dayjs(date).format('dddd');

  useEffect(() => {
    data && setDataday(data);
    const styles = isEditing ? 'bg-white' : 'bg-[#D9A17E]';
    setTxtStyles(txtStyles.replace(/bg-\w+/, styles));
  }, [data, isEditing]);

  return (
    <div>
      <div className="flex justify-between px-5 py-1 rounded-xl bg-stressed w-100">
        <span className="text-xl text-white capitalize font-yesteryear">
          {` ${getDayName(dataDay.date)} ${dataDay.id}`}
        </span>
        <>
          {isEditing ? (
            <button
              type="button"
              className="p-1 text-white hover:text-ok"
              onClick={() => setIsEditing(false)}
            >
              <i className="fa-solid fa-floppy-disk" />
            </button>
          ) : (
            <button
              type="button"
              className="p-1 text-white hover:text-ok"
              onClick={() => setIsEditing(true)}
            >
              <i className="fa-solid fa-pencil" />
            </button>
          )}
        </>
      </div>
      <textarea
        className={txtStyles}
        name="message"
        disabled={!isEditing}
        placeholder="How are you feeling today?"
        onChange={(e) => setDataday({ ...dataDay, message: e.target.value })}
        value={dataDay.message}
      />

      <div className="flex justify-end gap-10">
        <button>
          <i className="text-3xl fa-solid fa-trash text-stressed hover:text-zinc-700" />
        </button>
        <button>
          <i className="text-3xl fa-solid fa-share text-ok hover:text-zinc-700" />
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
