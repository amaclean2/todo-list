const sendData = (res, err, data) => {
    if (err) res.status(400).json({ err })
    else res.status(200).json({ data })
}

const handleDBResponse = (cb, err, docs) => {
    if (err) cb(err)
    else cb(null, docs)
}

exports.sendData = sendData
exports.handleDBResponse = handleDBResponse
