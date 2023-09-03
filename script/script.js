/*
 * Copyright (C) 2023 TheRealOne78 <bajcsielias78@gmail.com>
 *
 * This file is part of the 'TheRealOne78's error pages' project
 *
 * 'TheRealOne78's error pages' is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 *
 * 'TheRealOne78's error pages' is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General
 * Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * 'TheRealOne78's error pages'. If not, see <http://www.gnu.org/licenses/>.
 */

/* Pre-defined terminal-like HEX colors */
const textColorArr = [ "#ffffff", "#0037DA", "#3A96DD", "#13A10E", "#881798", "#C50F1F", "#C19C00" ]

const colorIndex = Math.floor(Math.random() * textColorArr.length);

document.body.style.color = textColorArr[colorIndex];

/* Set image container background */
document.querySelector(".errImgContainer").style.background = textColorArr[colorIndex];

/* Set everything else to the chosen color, just to be sure */
document.querySelector(".errContentContainer").style.color = textColorArr[colorIndex];
document.querySelectorAll("a").forEach(a => a.style.color = textColorArr[colorIndex]);
document.querySelectorAll(".selected").forEach(selected => selected.style.background = textColorArr[colorIndex]);
