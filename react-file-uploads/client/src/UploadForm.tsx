/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { type FormEvent, useState } from 'react';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

export function UploadForm() {
  const [imageFile, setImageFile] = useState<Image>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      //  Prevent the browser's default behavior for form submissions.
      event.preventDefault();

      //  Create a `new` FormData object from the `event`.
      const formData = new FormData(event.currentTarget);

      //  Use fetch() to send a POST request to /api/uploads.
      //  The body should be the form data object you created (not a JSON string).
      const req = await fetch('/api/uploads', {
        method: 'POST',
        body: formData,
      });

      //  Headers are not necessary as fetch will use the correct Content-Type
      //  automatically (multipart/form-data).

      //  Parse the JSON response body and log the parsed response body.
      //  Remember to use type assertion when retrieving the JSON from the response.
      const json = (await req.json()) as Image;

      //  Set the `imageFile` state to the parsed response body.
      setImageFile(json);

      /*
       * References:
       * https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
       * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
       */
    } catch (err) {
      console.error('failed to upload:', err);
    }
  }

  return (
    <div>
      <h3>React File Uploads</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Caption:
          <input required autoFocus type="text" id="caption" name="caption" />
        </label>
        <br />
        <input
          required
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg, .gif"
        />
        <button type="submit">Upload</button>
      </form>

      {imageFile && (
        <div>
          <img src={imageFile?.url} />
          <p>{imageFile?.caption}</p>
        </div>
      )}
    </div>
  );
}
