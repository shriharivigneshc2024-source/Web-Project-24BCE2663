document.addEventListener("DOMContentLoaded", () => {
  const byId = (id) => document.getElementById(id);

  const textBtn = byId("changeTextBtn");
  if (textBtn) {
    textBtn.addEventListener("click", () => {
      byId("welcomeParagraph").innerHTML = "Welcome to JavaScript!";
    });
  }

  const nameBtn = byId("nameSubmitBtn");
  if (nameBtn) {
    nameBtn.addEventListener("click", () => {
      const name = byId("nameInput").value.trim() || "Guest";
      byId("nameOutput").innerHTML = `Hello ${name}, Welcome!`;
    });
  }

  const showMessageBtn = byId("showMessageBtn");
  if (showMessageBtn) {
    showMessageBtn.addEventListener("click", () => {
      byId("messageBox").innerHTML = "Welcome to JavaScript!";
    });
  }

  const goOnlineBtn = byId("goOnlineBtn");
  if (goOnlineBtn) {
    goOnlineBtn.addEventListener("click", () => {
      const status = byId("statusText");
      status.innerHTML = "Status: Online";
      status.classList.remove("status-offline");
      status.classList.add("status-online");
    });
  }

  window.calculateTotal = function calculateTotal(price, quantity) {
    return Number(price) * Number(quantity);
  };

  const totalDemoBtn = byId("calculateBtn");
  if (totalDemoBtn) {
    totalDemoBtn.addEventListener("click", () => {
      const total = window.calculateTotal(byId("priceInput").value, byId("qtyInput").value);
      byId("totalOutput").textContent = `Total cost: Rs. ${total.toFixed(2)}`;
    });
  }

  const universityForm = byId("universityForm");
  if (universityForm) {
    universityForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = byId("uName").value.trim();
      const email = byId("uEmail").value.trim();
      const password = byId("uPassword").value;
      const confirm = byId("uConfirm").value;
      const age = byId("uAge").value.trim();
      const errorBox = byId("universityErrors");
      const errors = [];

      if (!name || !email || !password || !confirm || !age) errors.push("All fields are required.");
      if (!email) errors.push("Email cannot be empty.");
      if (password.length < 8) errors.push("Password must be at least 8 characters long.");
      if (password !== confirm) errors.push("Confirm password must match the password.");
      if (Number.isNaN(Number(age)) || Number(age) < 18) errors.push("Age must be a number greater than or equal to 18.");

      errorBox.innerHTML = errors.length ? errors.join("<br>") : '<span class="field-success">University form validated successfully.</span>';
    });
  }

  const checkoutForm = byId("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const phone = byId("checkoutPhone").value.trim();
      const zip = byId("checkoutZip").value.trim();
      const payment = document.querySelector('input[name="paymentOption"]:checked');
      const errors = [];

      if (!/^\d{10}$/.test(phone)) errors.push("Phone number must contain exactly 10 digits.");
      if (!/^\d{5,6}$/.test(zip)) errors.push("ZIP/postal code must be a valid 5 or 6 digit code.");
      if (!payment) errors.push("Please select a payment option.");

      byId("checkoutErrors").innerHTML = errors.length ? errors.join("<br>") : '<span class="field-success">Checkout validation passed.</span>';
    });
  }

  const vtopForm = byId("vtopForm");
  if (vtopForm) {
    vtopForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = byId("vtopUsername").value.trim();
      const password = byId("vtopPassword").value.trim();
      const userType = byId("vtopUserType").value;
      let valid = true;

      const setError = (id, message) => {
        byId(id).textContent = message;
        if (message) valid = false;
      };

      setError("vtopUserError", username ? "" : "Username is required.");
      setError("vtopPassError", password.length >= 6 ? "" : "Password must be at least 6 characters.");
      setError("vtopTypeError", userType ? "" : "Please select a user type.");

      if (valid) {
        byId("vtopResult").innerHTML = `Welcome ${username}`;
        window.location.hash = "#dashboardWelcome";
      }
    });
  }

  const examForm = byId("examForm");
  if (examForm) {
    examForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = byId("examName").value.trim();
      const email = byId("examEmail").value.trim();
      const gender = document.querySelector('input[name="examGender"]:checked');
      const subjects = document.querySelectorAll('input[name="subjects"]:checked');
      const declaration = byId("examDeclaration").checked;
      const errors = [];

      if (!name || !email) errors.push("Name and email cannot be empty.");
      if (!gender) errors.push("Please select one gender option.");
      if (subjects.length === 0) errors.push("Select at least one subject.");
      if (!declaration) errors.push("Please accept the declaration.");

      byId("examErrors").innerHTML = errors.length ? errors.join("<br>") : '<span class="field-success">Exam form is ready to submit.</span>';
    });
  }

  const hotelForm = byId("hotelForm");
  if (hotelForm) {
    hotelForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const guest = byId("guestName").value.trim();
      const contact = byId("guestContact").value.trim();
      const room = document.querySelector('input[name="roomType"]:checked');
      const services = document.querySelectorAll('input[name="services"]:checked');
      const terms = byId("hotelTerms").checked;
      const errors = [];

      if (!guest || !contact) errors.push("Guest name and contact number are required.");
      if (!room) errors.push("Please choose one room type.");
      if (services.length === 0) errors.push("Please choose at least one additional service.");
      if (!terms) errors.push("Terms and conditions must be accepted.");

      byId("hotelErrors").innerHTML = errors.length ? errors.join("<br>") : '<span class="field-success">Hotel booking validation passed.</span>';
    });
  }

  const sequentialSubmit = byId("sequentialSubmit");
  if (sequentialSubmit) {
    sequentialSubmit.addEventListener("click", (event) => {
      event.preventDefault();
      const fields = [byId("seqUsername"), byId("seqEmail"), byId("seqPassword")];
      const firstEmpty = fields.find((field) => !field.value.trim());
      if (firstEmpty) {
        firstEmpty.focus();
        byId("sequentialFeedback").textContent = `Please fill ${firstEmpty.name}.`;
      } else {
        byId("sequentialFeedback").textContent = "All fields are filled.";
      }
    });
  }

  const autoUser = byId("autoUsername");
  const autoPass = byId("autoPassword");
  if (autoUser && autoPass) {
    const activateFocus = (field) => {
      [autoUser, autoPass].forEach((input) => input.classList.remove("border-success"));
      field.classList.add("border-success");
    };

    autoUser.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && autoUser.value.trim()) {
        event.preventDefault();
        autoPass.focus();
      }
    });

    autoUser.addEventListener("blur", () => {
      if (autoUser.value.trim()) autoPass.focus();
    });

    autoUser.addEventListener("focus", () => activateFocus(autoUser));
    autoPass.addEventListener("focus", () => activateFocus(autoPass));
  }

  const tooltipImage = byId("tooltipProduct");
  const tooltip = byId("productTooltip");
  if (tooltipImage && tooltip) {
    tooltipImage.addEventListener("mouseover", () => {
      tooltip.style.display = "block";
    });
    tooltipImage.addEventListener("mouseout", () => {
      tooltip.style.display = "none";
    });
    tooltipImage.addEventListener("mousemove", (event) => {
      tooltip.style.left = `${event.clientX + 20}px`;
      tooltip.style.top = `${event.clientY + 20}px`;
    });
  }

  const liveEmail = byId("liveEmail");
  const livePassword = byId("livePassword");
  if (liveEmail && livePassword) {
    const emailIcon = byId("emailIcon");
    const passwordIcon = byId("passwordIcon");
    const passwordHelp = byId("passwordHelp");
    const liveForm = byId("liveValidationForm");

    liveEmail.addEventListener("input", () => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(liveEmail.value);
      emailIcon.textContent = valid ? "✓" : "✗";
      emailIcon.className = `email-icon ${valid ? "valid-icon" : "invalid-icon"}`;
    });

    livePassword.addEventListener("input", () => {
      const value = livePassword.value;
      const strong = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(value);
      passwordIcon.textContent = strong ? "✓" : "✗";
      passwordIcon.className = `password-icon ${strong ? "valid-icon" : "invalid-icon"}`;
      passwordHelp.textContent = strong ? "Strong password." : "Use 8+ characters with letters and numbers.";
      passwordHelp.className = strong ? "field-success" : "field-error";
    });

    liveForm.addEventListener("submit", (event) => {
      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(liveEmail.value);
      const passValid = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(livePassword.value);
      if (!emailValid || !passValid) {
        event.preventDefault();
        byId("liveValidationResult").textContent = "Please correct the highlighted fields.";
      } else {
        event.preventDefault();
        byId("liveValidationResult").textContent = "Live validation passed.";
      }
    });
  }

  const modalButtons = document.querySelectorAll("[data-open-modal]");
  const closeButtons = document.querySelectorAll("[data-close-modal]");
  let modalZ = 1000;

  const openModal = (targetId) => {
    const backdrop = byId(`${targetId}-backdrop`);
    const modal = byId(targetId);
    if (!backdrop || !modal) return;
    backdrop.classList.add("open");
    modal.classList.add("open");
    backdrop.style.zIndex = String(modalZ - 1);
    modal.style.zIndex = String(modalZ);
    modalZ += 1;
  };

  const closeModal = (targetId) => {
    const backdrop = byId(`${targetId}-backdrop`);
    const modal = byId(targetId);
    if (!backdrop || !modal) return;
    backdrop.classList.remove("open");
    modal.classList.remove("open");
    backdrop.style.zIndex = "-1";
    modal.style.zIndex = "-1";
  };

  modalButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.openModal));
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => closeModal(button.dataset.closeModal));
  });

  document.querySelectorAll(".custom-modal-backdrop, .modal-bg").forEach((backdrop) => {
    backdrop.addEventListener("click", () => closeModal(backdrop.dataset.modalTarget));
  });

  document.querySelectorAll(".overlap-gallery img").forEach((image) => {
    image.addEventListener("click", () => {
      document.querySelectorAll(".overlap-gallery img").forEach((item, index) => {
        item.style.zIndex = String(index + 1);
      });
      image.style.zIndex = "10";
    });
  });

  document.querySelectorAll(".wrap .card").forEach((card) => {
    const tip = card.querySelector(".tip");
    if (!tip) return;
    card.addEventListener("mouseenter", () => {
      tip.style.display = "block";
      tip.style.zIndex = "999";
    });
    card.addEventListener("mouseleave", () => {
      tip.style.display = "none";
    });
  });

  if (window.jQuery) {
    $(document).ready(() => {
      $("#toggleParagraphBtn").click(() => {
        $("#toggleParagraph").toggle();
      });

      $(".gallery-thumb").click(function () {
        const targetSrc = $(this).attr("src");
        $("#mainGalleryImage").fadeOut(200, function () {
          $(this).attr("src", targetSrc).fadeIn(200);
        });
      });

      $(".jq-paragraph").addClass("highlight");
      $(".jq-paragraph").click(function () {
        $(this).toggleClass("highlight");
      });

      $("#addTodoBtn").click(() => {
        $("#todoList").append("<li>New Task</li>");
      });

      $("#updateTodoBtn").click(() => {
        $("#todoList li").first().text("Updated");
      });

      $(document).on("click", "#todoList li", function () {
        $(this).toggleClass("completed");
      });

      $(".fade-hover-card").mouseenter(function () {
        $(this).find("img").fadeTo(200, 0.5);
      });

      $(".fade-hover-card").mouseleave(function () {
        $(this).find("img").fadeTo(200, 1);
      });
    });
  }
});
