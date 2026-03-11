import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(1).max(100),
});

export const registerSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().email(),
  password: z.string().min(8).max(100),
  phone_number: z.string().trim().min(8).max(30),
  profile_image: z.string().trim().max(500).optional().nullable(),
  gender: z.enum(["MALE", "FEMALE", "RATHER_NOT_SAY"]),
  consent: z.boolean().optional(),
});

export const forgotPasswordSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
});

export const resendCodeSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
});

export const verifyEmailSchema = z.object({
  email: z.string().trim().toLowerCase().email(),
  code: z.string().trim().regex(/^\d{4}$/),
});

export const forumPostSchema = z.object({
  movie_id: z.string().trim().min(1),
  comment: z.string().trim().min(1).max(2000),
  review: z.number().int().min(0).max(10).optional(),
});

export const forumReplySchema = z.object({
  forum_id: z.string().trim().min(1),
  comment: z.string().trim().min(1).max(2000),
});

export const forumVoteSchema = z.object({
  post_id: z.string().trim().min(1),
  type: z.enum(["LIKE", "DISLIKE"]),
});

export const paymentCreateSchema = z.object({
  seatIds: z.array(z.string().trim().min(1)).min(1).max(10),
  ticketTypes: z.array(z.string()).optional(),
});

export const paymentPriceSchema = z.object({
  ticketTypes: z.array(z.string()).min(1).max(10),
});

export const profilePatchSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone_number: z.string().trim().min(8).max(30),
  gender: z.enum(["MALE", "FEMALE", "RATHER_NOT_SAY"]),
});

export const profilePasswordSchema = z.object({
  oldPassword: z.string().nullable().optional(),
  newPassword: z.string().min(8).max(100),
});

export const adminLoginSchema = z.object({
  name: z.string().trim().min(1).max(100),
  password: z.string().min(1).max(100),
});