import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export interface OrderObject {
  name: string;
  category: string;
  description: string;
  quantity?: string;
  size?: string;
  color?: string;
  images?: string[];
}

interface OrderState {
  orders: OrderObject[];
}

const initialState: OrderState = {
  orders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: initialState,
  reducers: {
    addOrderItem(state, {payload}: PayloadAction<OrderObject>) {
      state.orders.push(payload);
    },
    editOrderItem(state, {payload}: PayloadAction<OrderObject>) {
      const index = state.orders.findIndex(
        order => order.name === payload.name,
      );
      state.orders[index] = payload;
    },
    deleteOrderItem(state, {payload}: PayloadAction<OrderObject>) {
      const index = state.orders.findIndex(
        order => order.name === payload.name,
      );
      state.orders.splice(index, 1);
    },
  },
});

export const {addOrderItem, editOrderItem, deleteOrderItem} =
  orderSlice.actions;

export default orderSlice.reducer;
