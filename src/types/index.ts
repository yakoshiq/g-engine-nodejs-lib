// Перечисления
export enum UserRole {
  User = 'User',
  Support = 'Support',
  Sales = 'Sales',
  Observer = 'Observer',
  Partner_Manager = 'Partner_Manager',
  Project_Manager = 'Project_Manager',
  Administrator = 'Administrator',
  Boss_Of_This_Gym = 'Boss_Of_This_Gym'
}

export enum StatusCode {
  DUPLICATE_TRANSACTION = 'DUPLICATE_TRANSACTION',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  PAYMENT_VERIFICATION_FAILED = 'PAYMENT_VERIFICATION_FAILED',
  PAYMENT_CONFIRMATION_FAILED = 'PAYMENT_CONFIRMATION_FAILED',
  PAYMENT_SUCCESS = 'PAYMENT_SUCCESS',
  PAYMENT_IN_PROGRESS = 'PAYMENT_IN_PROGRESS',
  PURCHASE_NOT_FOUND = 'PURCHASE_NOT_FOUND',
  REQUEST_ACCEPTED = 'REQUEST_ACCEPTED',
  CALCULATION_ERROR = 'CALCULATION_ERROR',
  TOP_UP_ERROR = 'TOP_UP_ERROR'
}

export enum RateSource {
  cb_rf = 'cb_rf',
  steam = 'steam'
}

export enum CurrencyPair {
  USD_RUB = 'USD:RUB',
  EUR_RUB = 'EUR:RUB'
}

// Базовые интерфейсы
export interface ResponseBase<T> {
  success: boolean;
  message: string;
  data?: T | null;
}

export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail: ValidationError[];
}

// Аутентификация
export interface UserAuth {
  login: string;
  password: string;
}

export interface Token {
  access_token: string;
  refresh_token?: string;
  token_type: string;
}

// Пользователи
export interface UserMe {
  login: string;
  name: string;
  balance?: number;
  role?: UserRole;
  is_active?: boolean;
  is_beta?: boolean;
  currency_version?: string;
}

export interface UserBalance {
  currency?: string;
  balance?: number;
  cashback?: number;
}

export interface UserBalanceObserver extends UserBalance {
  id?: number;
  login?: string;
}

export interface RoleRead {
  id?: number;
  name?: string;
  level?: number;
}

export interface UserReadObserver {
  id?: number;
  login?: string;
  name?: string;
  last_name?: string;
  role?: RoleRead;
  created_at?: string;
  balance?: number;
  cashback?: number;
  currency_version?: string;
  is_active?: boolean;
}

export interface UserReadTransactionObserver {
  id?: number;
  login?: string;
  name?: string;
  last_name?: string;
  created_at?: string;
  balance?: number;
  cashback?: number;
  currency_version?: string;
  is_active?: boolean;
}

// Платежи
export interface VerifyPaymentCreate {
  transaction_id: string;
  service_id: number;
  account: string;
  amount: number | string;
  currency: string;
}

export interface ExecutePaymentParams {
  transaction_id: string;
}

export interface PaymentResponse {
  transaction_id: string;
  amount_rub: string;
  amount_usd?: string;
  account?: string;
  date: string;
  status?: string;
  status_code: StatusCode;
  issue_date?: string;
}

// Транзакции
export interface TransactionRead {
  transaction_id: string;
  date?: string;
  issue_date?: string;
  account?: string;
  amount?: number;
  amount_usd?: number;
  status?: string;
  status_code?: StatusCode;
  children?: TransactionRead[];
}

// Параметры и сервисы
export interface ParameterDTO {
  name: string;
  param_number?: number;
  external_param_number?: number;
  id: number;
}

export interface ServiceDTO {
  id: number;
  name?: string;
  description?: string;
  service_number: number;
  image_path?: string;
  is_active?: boolean;
}

export interface SystemStoreBase {
  id?: number;
  name?: string;
  color?: string;
}

export interface StoreDTO {
  external_id: number;
  name: string;
  deduction?: number;
  system_store?: SystemStoreBase;
  id: number;
}

export interface TransactionReadObserver {
  id?: number;
  code: string;
  code_api?: string;
  parameter_id?: number;
  store_id?: number;
  date?: string;
  issue_date?: string;
  steam_login?: string;
  amount?: number;
  amount_usd?: number;
  cashback?: number;
  status?: string;
  status_code?: StatusCode;
  gift_code?: string;
  parameter?: ParameterDTO;
  store?: StoreDTO;
  service?: ServiceDTO;
  children?: TransactionReadObserver[];
  user?: UserReadTransactionObserver;
}

// Валюты
export interface CurrencyRead {
  source: string;
  pair: string;
  currency_rate: string;
} 