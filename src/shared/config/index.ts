/**
 * Модуль инициализации env-переменных
 * @remark Если не найдено значение хоть одной переменной,
 * Приложение сразу выбросит ошибку, при инициализации модуля
 * @module
 */

import * as process from "process";

/**
 * Получение env-переменной
 * @throwable
 */
const getEnvVar = (key: string) => {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Env variable ${key} is required`);
    }
    return value;
};

/** API entrypoint */
export const API_URL = getEnvVar("REACT_APP_API_URL");


/** Режим запуска программы */
export const NODE_ENV = getEnvVar("NODE_ENV");
/** Режим разработки */
export const isDevEnv = NODE_ENV === "development";
/** Режим продакшена */
export const isProdEnv = NODE_ENV === "production";