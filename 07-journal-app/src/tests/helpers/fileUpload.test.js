import setImmediate from "setimmediate";
import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "dzdcvwoeo",
  api_key: "142993529669372",
  api_secret: "kxkfxC6wEATG0qyE8cqB6yZraUI",
  secure: true
});

describe('Test on fileUpload', () => {
  test('Should upload a file and return the URL', async () => {

    const resp = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg/1920px-Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg");
    const blob = await resp.blob();

    const file = new File([blob], "foto.jpg");
    const url = await fileUpload(file);

    expect(typeof url).toBe("string");

    // Delete img by ID
    const segments = url.split('/')
    const imageId = segments[ segments.length - 1 ].replace(".jpg",'');

    await cloudinary.v2.api.delete_resources( imageId, {}, () => {
    });
  });

  test('Should return an error', async () => {

    const file = new File([], "foto.png");
    const url = await fileUpload(file);

    expect(url).toBe(null);

  });
});
