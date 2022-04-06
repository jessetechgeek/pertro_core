export const ALL_ORDER_STATUS = {
  ToPay: 'ToPay',
  Confirming: 'Confirming',
  Cancel: 'Cancel',
  ReadyToShip: 'ReadyToShip',
  PickingUpOrder: 'PickingUpOrder',
  OrderInWarehouse: 'OrderInWarehouse',
  Delivering: 'Delivering',
  DeliveryAttemptFail: 'DeliveryAttemptFail',
  DeliveryFail: 'DeliveryFail',
  Delivered: 'Delivered',
  RefundRequested: 'RefundRequested',
  RefundApproved: 'RefundApproved',
  RefundRejected: 'RefundRejected',
  Returning: 'Returning',
  Returned: 'Returned',
  RefundingOrder: 'RefundingOrder',
  RefundCompleted: 'RefundCompleted',
  DisputeRequested: 'DisputeRequested',
  CheckingDisputeRequest: 'CheckingDisputeRequest',
  DisputeRejected: 'DisputeRejected',
  DisputeApproved: 'DisputeApproved',
  DisputeReturning: 'DisputeReturning',
  DisputeReturned: 'DisputeReturned',
  DisputeRefundingOrder: 'DisputeRefundingOrder',
  DisputeRefundCompleted: 'DisputeRefundCompleted',

  ReturnRefund: 'ReturnRefund',
  All: 'All',
};

export const ORDER_LABEL_BY_STATUS = {
  ToPay: 'Create order',
  Confirming: 'Confirming the order',
  Delivered: 'Order successfully deliverd',
  Delivering: 'Delivering your order',
};

export const RENDER_STATUS = [
  {
    label: 'All',
    value: ALL_ORDER_STATUS.All,
  },
  {
    label: 'Confirmation',
    value: ALL_ORDER_STATUS.Confirming,
  },
  {
    label: 'Ready to Ship',
    value: ALL_ORDER_STATUS.ReadyToShip,
  },
  {
    label: 'Delivering',
    value: ALL_ORDER_STATUS.Delivering,
  },
  {
    label: 'Delivered',
    value: ALL_ORDER_STATUS.Delivered,
  },
  {
    label: 'Cancel',
    value: ALL_ORDER_STATUS.Cancel,
  },
  {
    label: 'Return/Refund',
    value: ALL_ORDER_STATUS.ReturnRefund,
  },
  {
    label: 'Dispute',
    value: ALL_ORDER_STATUS.DisputeRequested,
  },
];

export const RENDER_STATUS_RETURN_REFUND = [
  { value: ALL_ORDER_STATUS.All },
  {
    label: 'Confirmation',
    value: ALL_ORDER_STATUS.Confirming,
  },
  { value: ALL_ORDER_STATUS.Returning },
  { value: ALL_ORDER_STATUS.Returned },
  {
    label: 'Rejected',
    value: ALL_ORDER_STATUS.RefundRejected,
  },
];

export const ORDER_STATUS_COLOR = {
  [ALL_ORDER_STATUS.ToPay]: 'lime',
  [ALL_ORDER_STATUS.Confirming]: 'lime',
  [ALL_ORDER_STATUS.Cancel]: 'red',
  [ALL_ORDER_STATUS.ReadyToShip]: 'orange',
  [ALL_ORDER_STATUS.PickingUpOrder]: 'lime',
  [ALL_ORDER_STATUS.OrderInWarehouse]: 'orange',
  [ALL_ORDER_STATUS.Delivering]: 'magenta',
  [ALL_ORDER_STATUS.DeliveryAttemptFail]: 'red',
  [ALL_ORDER_STATUS.DeliveryFail]: 'volcano',
  [ALL_ORDER_STATUS.Delivered]: 'gold',
  [ALL_ORDER_STATUS.RefundRequested]: 'purple',
  [ALL_ORDER_STATUS.RefundApproved]: 'gold',
  [ALL_ORDER_STATUS.RefundRejected]: 'volcano',
  [ALL_ORDER_STATUS.Returning]: 'lime',
  [ALL_ORDER_STATUS.Returned]: 'gold',
  [ALL_ORDER_STATUS.RefundingOrder]: 'lime',
  [ALL_ORDER_STATUS.RefundCompleted]: 'gold',
  [ALL_ORDER_STATUS.DisputeRequested]: 'volcano',
  [ALL_ORDER_STATUS.DisputeRefundCompleted]: 'gold',
  [ALL_ORDER_STATUS.DisputeReturned]: 'lime',
  [ALL_ORDER_STATUS.DisputeReturning]: 'purple',
  [ALL_ORDER_STATUS.CheckingDisputeRequest]: 'blue',
  [ALL_ORDER_STATUS.DisputeRejected]: '',
  [ALL_ORDER_STATUS.ReturnRefund]: 'geekblue',
  [ALL_ORDER_STATUS.DisputeApproved]: 'gold',
  default: '',
};

export const TRANSLATE_ALL_ORDER_STATUS_KEY = {
  ToPay: 'TO_PAY',
  Confirming: 'CONFIRMING',
  Cancel: 'CANCEL',
  ReadyToShip: 'READY_TO_SHIP',
  PickingUpOrder: 'PICKING_UP_ORDER',
  OrderInWarehouse: 'ORDER_IN_WAREHOUSE',
  Delivering: 'DELIVERING',
  DeliveryAttemptFail: 'DELIVERY_ATTEMPT_FAIL',
  DeliveryFail: 'DELIVERY_FAIL',
  Delivered: 'DELIVERED',
  RefundRequested: 'REFUND_REQUESTED',
  RefundApproved: 'REFUND_APPROVED',
  RefundRejected: 'REFUND_REJECTED',
  Returning: 'RETURNING',
  Returned: 'RETURNED',
  RefundingOrder: 'REFUNDING_ORDER',
  RefundCompleted: 'REFUND_COMPLETED',
  DisputeRequested: 'DISPUTE_REQUESTED',
  CheckingDisputeRequest: 'CHECKING_DISPUTE_REQUEST',
  DisputeRejected: 'DISPUTE_REJECTED',
  DisputeApproved: 'DISPUTE_APPROVED',
  DisputeReturning: 'DISPUTE_RETURNING',
  DisputeReturned: 'DISPUTE_RETURNED',
  DisputeRefundingOrder: 'DISPUTE_REFUNDING_ORDER',
  DisputeRefundCompleted: 'DISPUTE_REFUND_COMPLETED',

  ReturnRefund: 'RETURN_REFUND',
  All: 'All',
};
