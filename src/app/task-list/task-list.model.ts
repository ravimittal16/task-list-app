export class TaskModel {
  id!: number;
  title!: string;
  description!: string;
  status!: 'New' | 'InProgress' | 'OnHold' | 'Completed';
  isCompleted?: boolean;
}
