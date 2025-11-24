import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
const schema = z.object({
  name: z.string().min(2, "Le nom doit avoir au moins 2 caractères"),
  email: z.string().refine((value) => {
    return value.includes("@") && value.includes(".");
  }, "Email non valide"),
  message: z.string().min(6, "Le message doit avoir au moins 6 caractères"),
});
type FormValue = z.infer<typeof schema>;
const FormContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormValue) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 items-center"
    >
      <Input
        placeholder="Votre Nom"
        {...register("name")}
        className="bg-white w-10/12 sm:w-full"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}
      <Input
        placeholder="Votre Email"
        {...register("email")}
        className="bg-white w-10/12 sm:w-full"
      />
      {errors.email && (
        <p className="text-red-500 text-sm">{errors.email.message}</p>
      )}
      <Input
        placeholder="Votre Message"
        {...register("message")}
        className="bg-white w-10/12 sm:w-full"
      />
      {errors.message && (
        <p className="text-red-500 text-sm">{errors.message.message}</p>
      )}
      <Button
        type="submit"
        variant="secondary"
        className="font-bold w-10/12 sm:w-full"
      >
        Envoyer
      </Button>
    </form>
  );
};

export default FormContact;
