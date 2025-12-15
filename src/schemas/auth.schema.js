import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Username không được rỗng"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
});

export const registerSchema = z.object({
  username: z.string().min(3, "Username tối thiểu 3 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự"),
  phone: z.string().min(8, "Số điện thoại không hợp lệ"),
  dob: z.string().min(1, "Vui lòng chọn ngày sinh"),
});
