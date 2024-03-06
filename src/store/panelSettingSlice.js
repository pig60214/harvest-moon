import { createSlice } from '@reduxjs/toolkit'

export const panelSettingSlice = createSlice({
  name: 'panelSetting',
  initialState: {
    cooking: {
      category: '全品項',
    },
    item: {
      category: '全品項',
    },
    animal: {
      category: '野生動物'
    }
  },
  reducers: {
    setCookingCategory: (state, { payload }) => {
      state.cooking.category = payload;
    },
    setItemCategory: (state, { payload }) => {
      state.item.category = payload;
    },
    setAnimalCategory: (state, { payload }) => {
      if(!state.animal) {
        state.animal = { category: '野生動物' };
      }
      state.animal.category = payload;
    },
  },
})

export const { setCookingCategory, setItemCategory, setAnimalCategory } = panelSettingSlice.actions

export default panelSettingSlice.reducer