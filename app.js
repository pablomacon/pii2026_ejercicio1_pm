const loginBtn = document.getElementById("loginBtn");
const overlayLoginBtn = document.getElementById("overlayLoginBtn");
const previewBtn = document.getElementById("previewBtn");
const loginStatus = document.getElementById("loginStatus");
const overlayStatus = document.getElementById("overlayStatus");
const activityBadge = document.getElementById("activityBadge");

function setStatus(element, type, message) {
  element.className = `status-box ${type}`;
  element.textContent = message;
}

function unlockActivity(message = "Acceso habilitado.") {
  document.body.classList.add("authorized");
  setStatus(loginStatus, "success", message);
  setStatus(overlayStatus, "success", message);

  if (activityBadge) {
    activityBadge.textContent = "Actividad habilitada";
    activityBadge.classList.add("badge-enabled");
  }

  loginBtn.disabled = true;
  previewBtn.disabled = true;
  previewBtn.style.display = "none";
  overlayLoginBtn.disabled = true;

  loginBtn.textContent = "Ingresado";
  overlayLoginBtn.textContent = "Ingresado";
}

function showInfo(message) {
  setStatus(loginStatus, "info", message);
  setStatus(overlayStatus, "info", message);
}

function showError(message) {
  setStatus(loginStatus, "error", message);
  setStatus(overlayStatus, "error", message);
}

async function handleLogin() {
  showInfo("Iniciando sesión con Google...");

  const loginResult = await AuthService.beginGoogleLogin();

  if (!loginResult.ok) {
    showError(loginResult.message || "No se pudo iniciar la autenticación.");
    return;
  }

  const validation = await AuthService.validateAccess({
    idToken: loginResult.idToken,
    slug: window.APP_CONFIG.activitySlug
  });

  if (validation.ok) {
    const estudiante = validation.estudiante;
    unlockActivity(
      `Bienvenido/a, ${estudiante.nombre} ${estudiante.apellido}. Acceso autorizado para ${estudiante.titulo}.`
    );
  } else {
    showError(validation.message || "Tu cuenta no está habilitada para esta actividad.");
  }
}

function simulateAuthorizedView() {
  unlockActivity("Vista simulada: interfaz desbloqueada en modo demostración.");
}

loginBtn.addEventListener("click", handleLogin);
overlayLoginBtn.addEventListener("click", handleLogin);
previewBtn.addEventListener("click", simulateAuthorizedView);
