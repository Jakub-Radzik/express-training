import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object()
  .shape({
    name: yup.string().required('Name is required !'),
    email: yup
      .string()
      .email('Invalid email !')
      .required('Email is required !'),
  })
  .required();

interface IFormInputs {
  name: string;
  email: string;
}

export const ReactHookForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Forms</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} />
        <p>{errors.name?.message}</p>
        <input type="email" {...register('email')} />
        <p>{errors.email?.message}</p>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
