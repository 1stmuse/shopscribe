import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '..';

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
      const index = state.orders.findIndex(
        order => order.name === payload.name,
      );

      if (index < 0) {
        state.orders.push(payload);
      } else {
        state.orders[index] = payload;
      }
    },

    deleteOrderItem(state, {payload}: PayloadAction<OrderObject>) {
      const index = state.orders.findIndex(
        order => order.name === payload.name,
      );
      state.orders.splice(index, 1);
    },

    clearOrders(state) {
      state.orders = [];
    },
  },
});

export const {addOrderItem, deleteOrderItem, clearOrders} = orderSlice.actions;

export const getOrdersSelector = (state: RootState) => state.orders.orders;

export default orderSlice.reducer;
