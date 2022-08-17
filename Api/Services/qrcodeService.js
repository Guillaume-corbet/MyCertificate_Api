import dotenv from 'dotenv'
import qr from 'qrcode'

dotenv.config();

const createQrcode = (link) => {
    qr.toDataURL(link, function (err, url) {
        console.log(url)
    })
}

export {createQrcode}