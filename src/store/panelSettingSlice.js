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
      category: '野生動物',
      fishCategory: '全種類',
      season: '全季節',
      location: '全區域',
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
      state.animal.category = payload;
    },
    setAnimalFishCategory: (state, { payload }) => {
      state.animal.fishCategory = payload;
    },
    setAnimalSeason: (state, { payload }) => {
      state.animal.season = payload;
    },
    setAnimalLocation: (state, { payload }) => {
      state.animal.location = payload;
    },
  },
})

export const { setCookingCategory, setItemCategory, setAnimalCategory, setAnimalFishCategory, setAnimalSeason, setAnimalLocation } = panelSettingSlice.actions

export default panelSettingSlice.reducer