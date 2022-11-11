import { ApiClient } from '@modules/shared/services';
import { MonthlyMoneyConfig } from '@modules/monthly-money/clients/monthly-money.types';

export const MonthlyMoneyApiClient = {
  getAllConfigs(): Promise<MonthlyMoneyConfig[]> {
    return ApiClient.get<MonthlyMoneyConfig[]>('/monthly-money-configs');
  }
};
