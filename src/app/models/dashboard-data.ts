import { StatusCount } from "./status-count";

export interface DashboardData {
  countsByStatus: StatusCount[];
  averageScore: number;
}