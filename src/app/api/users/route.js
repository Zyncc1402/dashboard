export async function POST() {
    let { name, email, password, phone, isAdmin, img } =
      Object.fromEntries(formData);
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      img,
      isAdmin,
    });
    await user.save();
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}