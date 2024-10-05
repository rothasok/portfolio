function courseAPI() {
    if (process.env.NODE_ENV == "development") {
        return "https://official-joke-api.appspot.com/jokes/programming/random"
    } else {
        return `${process.env.VUE_APP_BACKEN}`
    }
}

export default courseAPI