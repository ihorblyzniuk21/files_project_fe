import { UserInterface } from './userInterface';
import { TokenInterface } from './tokenInterface';

export interface LoginResponseInterface {
	user: UserInterface,
	tokens: TokenInterface
}