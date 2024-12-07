
export const ActionTypes = {
    TILE_CLICK: "tile_click",
  };
  

  export const tileClick = (row, col) => ({
    type: ActionTypes.TILE_CLICK,
    payload: { row, col },
  });
  


  