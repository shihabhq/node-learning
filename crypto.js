import crypto from "crypto";

//createHash
const hash = crypto.createHash('sha256').update('haahaa').digest('hex')

//createHmac - more secured due to the secret key
const secretKey = "alkdfl;ajl;dsfkja";
const hmac = crypto
  .createHmac("sha256", secretKey)
  .update("pass1234")
  .digest("hex");

//randombytes - creating random strings -can use to make token
crypto.randomBytes(16, (err, buffer) => {
  if (err) console.log(err);
//   console.log(buffer.toString("hex"));
});

//cipher text

  
  const algorithm = 'aes-192-cbc';
  const password = 'Password used to generate key';
  
  // First, we'll generate the key. The key length is dependent on the algorithm.
  // In this case for aes192, it is 24 bytes (192 bits).
crypto.scrypt(password, 'salt', 24, (err, key) => {
    if (err) throw err;
    // Then, we'll generate a random initialization vector
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;
  
      // Once we have the key and iv, we can create and use the cipher...
      const cipher = crypto.createCipheriv(algorithm, key, iv);
  
      let encrypted = '';
      cipher.setEncoding('hex');
  
      cipher.on('data', (chunk) => encrypted += chunk);
      cipher.on('end', () => console.log(encrypted));
  
      cipher.write('some clear text data');
      cipher.end();
    });
  });
