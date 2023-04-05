import type { NextPage } from "next";
import Button from "@components/button";
import Layout from "@components/layout";
import Input from "@components/input";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useMutation from "@libs/client/useMutation";

interface EditProfileForm {
  email?: string;
  phone?: string;
  formErrors?: string;
  photo?: FileList;
  avatar?: FileList;
  name?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<EditProfileForm>();
  useEffect(() => {
    if (user?.name) setValue("name", user.name);
    if (user?.email) setValue("email", user.email);
    if (user?.phone) setValue("phone", user.phone);
  }, [user, setValue]);
  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);
  const onValid = ({ email, phone, name, photo, avatar }: EditProfileForm) => {
    if (loading) return;
    if (email === "" && phone === "" && name === "") {
      setError("formErrors", {
        message: "Please write down your email address or phone number",
      });
    }
    editProfile({
      email,
      phone,
      name,
    });
  };
  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data.error });
    }
  }, [data, setError]);
  const [photoPreview, setPhotoPreview] = useState("");
  const photo = watch("photo");
  useEffect(() => {
    if (photo && photo.length > 0) {
      const photoFile = photo[0];
      setPhotoPreview(URL.createObjectURL(photoFile));
    }
  }, [photo]);
  const [avatarPreview, setAvatarPreview] = useState("");
  const avatar = watch("avatar");
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const avatarFile = avatar[0];
      setAvatarPreview(URL.createObjectURL(avatarFile));
    }
  }, [avatar]);
  return (
    <Layout canGoBack title="Edit Profile">
      <form onSubmit={handleSubmit(onValid)} className="py-10 px-4 space-y-4">
        <div className="flex flex-col space-y-5  items-center space-x-3 mb-20">
          {photoPreview ? (
            <img
              src={photoPreview}
              className="w-20 h-20 rounded-full bg-slate-500"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-orange-500" />
          )}
          <div className="flex space-x-3">
            <label
              htmlFor="picture"
              className="cursor-pointer py-2 px-5 text-orange-500 border border-gray-300 rounded-lg shadow-sm text-sm font-semibold focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Photo
              <input
                {...register("photo")}
                id="picture"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
            <label
              htmlFor="picture"
              className="cursor-pointer py-2 px-5 text-orange-500 border border-gray-300 rounded-lg shadow-sm text-sm font-semibold focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Avatar
              <input
                {...register("avatar")}
                id="picture"
                type="file"
                className="hidden"
                accept="image/*"
              />
            </label>
          </div>
        </div>
        <Input
          register={register("name")}
          required={false}
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register("email")}
          required={false}
          label="Email"
          name="email"
          type="email"
        />
        <Input
          register={register("phone")}
          required={false}
          label="Phone number"
          name="phone"
          type="number"
          kind="phone"
        />
        {errors.formErrors ? (
          <span className="my-2 text-red-500 font-bold text-center block">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button text={loading ? "Loading..." : "Update profile"} />
      </form>
    </Layout>
  );
};
export default EditProfile;
