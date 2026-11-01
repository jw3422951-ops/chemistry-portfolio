"use strict";

const players = [...document.querySelectorAll("video")];
for (const player of players) {
  player.addEventListener("play", () => {
    for (const other of players) {
      if (other !== player) other.pause();
    }
  });
  player.addEventListener("error", () => {
    const message = player.closest("figure").querySelector(".playback-error");
    message.hidden = false;
  });
}
