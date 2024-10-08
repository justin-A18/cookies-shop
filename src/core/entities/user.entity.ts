import { Roles } from "@/infrastructure/interfaces";

export interface UserEntity {
	id: string;
	username: string;
	email: string;
	avatar: string;
	token: string;
	role: Roles;
	isValidEmail: boolean;
}