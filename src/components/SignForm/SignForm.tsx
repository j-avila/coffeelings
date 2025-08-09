import { useContext, useEffect, useState, useCallback } from 'react';
import { useAppContext } from '../../context/AppContext';

interface SignFormProps {
  action: (form: { email: string; password: string }) => void;
}

const SignForm = ({ action }: SignFormProps) => {
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const { state } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    if (isValid && form?.email && form?.password) {
      action(form);
    }
  };

  const validate = useCallback(() => {
    // const requiredFields: Array<keyof typeof form> = ['email', 'password'];
    // const isValid = requiredFields.every((field) => form[field]);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(form?.email);
    const isPasswordValid = form?.password?.length >= 8;

    setIsValid(isPasswordValid && isEmailValid);
  }, [form]);

  useEffect(() => {
    validate();
  }, [form, validate]);

  return (
    <div>
      <p>{state?.user?.user?.email}</p>
      <form className="flex flex-col gap-4">
        <label htmlFor="email">Email</label>
        <input
          className="px-4 py-2 leading-tight"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          className="px-4 py-2 leading-tight"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button
          onClick={handleSubmit}
          className="block px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
          type="button"
          disabled={!isValid}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignForm;
