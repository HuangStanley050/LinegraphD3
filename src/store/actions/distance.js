const writeError = (err) => {
    return {
        type: "writeError",
        payload: err
    };
};

const formError = () => {
    return {
        type: "formError",
    };
};

const writeSuccess = () => {
    return {
        type: "writeSuccess"
    };
};


export const distance = (distance) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        //console.log(getState.selection.currentSelection);
        const activity = getState().selection.currentSelection;
        //console.log(distance, activity);
        if (distance) {
            firestore.collection('activities').add({
                    distance,
                    activity,
                    date: new Date().toString()
                })
                .then(res => dispatch(writeSuccess()))
                .catch(err => dispatch(writeError(err.message)));
        }
        else {
            dispatch(formError());
        }

    };
};
