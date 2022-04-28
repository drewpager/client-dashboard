const initAuth = () => {
  return window.gapi.auth2.init({
    client_id: "770689162401-vfr850jj08bl1blub0v6kspfgsq5rt1i.apps.googleusercontent.com", //Paste client id here
    scope: "https://www.googleapis.com/auth/analytics.readonly"
  })
}

export const checkSignedIn = () => {
  return new Promise((resolve, reject) => {
    initAuth()
    .then(() => {
      const auth = window.gapi.auth2.getAuthInstance();
      resolve(auth.isSignedIn.get())
    })
    .catch((error) => {
      reject(error);
    });
  });
};

export const renderButton = () => {
  window.gapi.signin2.render("signin-button", {
    scope: "profile email",
    width: 240,
    height: 50,
    longtitle: true,
    theme: "dark",
    onsuccess: onSuccess,
    onfailure: onFailure,
  });
};

const onSuccess = (googleUser) => {
  console.log("Logged in as: ", googleUser.getBasicProfile().getName());
}

const onFailure = (error) => {
  console.error(error);
}

export const signOut = () => {
  window.gapi.auth2.getAuthInstance().signOut();
};