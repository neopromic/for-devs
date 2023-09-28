import { createContext } from "react";

createContext(authContext)

/** 
*Propriedades do context
* @param propName - Nome da propriedade
* @param {string, number} propType - Tipo da propriedade 
*/
interface PropsContext {
}

/**
 * AuthContext para gerenciar a autenticação em toda a aplicação do fordevs.
 * @param propsContext
 * @returns
 */
export function authContext(propsContext: PropsContext) {
  return;
}
