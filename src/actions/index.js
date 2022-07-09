const setData = (content) => {
	return {
		type: "SET_DATA",
		payload:content
	}
}

const appendData = (obj) => {
	return (dispatch) => {
		dispatch(setData(obj));
	}
}

export {
	appendData
}