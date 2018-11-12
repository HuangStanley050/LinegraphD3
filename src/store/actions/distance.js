export const distance = (distance) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //const firestore = getFirestore();
        console.log(getState.selection.currentSelection);
        console.log(distance);

    };
};
