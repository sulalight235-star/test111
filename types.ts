
export enum MaterialStatus {
  ALL = '全部',
  PENDING_AUDIT = '待审核',
  PENDING_PUSH = '待推送',
  REJECTED = '已驳回',
  PUSHED = '已推送',
  APPROVED = '审核通过',
  PENDING_SALES_REVIEW = '待销售审核',
  SALES_REVIEWING = '销售审核中'
}

export interface MaterialItem {
  id: string;
  status: MaterialStatus;
  type: string;
  source: string;
  supplier: string;
  projectName: string;
  auditFlowId: string;
  productCode: string;
  productName: string;
  unit: string;
  agreedPrice: string;
  submitTime: string;
  auditTime: string;
  auditor: string;
  remark: string;
}
