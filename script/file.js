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

/* Get filename extension */
let fileName = document.URL;
let extension = fileName.split(/[#?]/)[0].split('.').pop().trim().toLowerCase();
let fileCollection = document.getElementsByClassName("file");

switch(extension) {
  /* Images */
  case "jpg":
  case "jpeg":
  case "png":
  case "gif":
  case "webp":
  case "tiff":
  case "psd":
  case "raw":
  case "bmp":
  case "heif":
  case "indd":
  case "svg":
  for(let i = 0; i < fileCollection.length; i++)
    fileCollection[i].innerHTML = "image";
    break;
  /* Documents */
  case "pdf":
  case "docx":
  case "doc":
  case "rtf":
  case "odt":
  case "pdf":
  case "xls":
  case "xlsx":
  case "ods":
  case "ppt":
  case "pptx":
  case "odp":
  case "txt":
  for(let i = 0; i < fileCollection.length; i++)
    fileCollection[i].innerHTML = "document";
    break;
  /* Archives */
  case "tar":
  case "gz":
  case "xz":
  case "bz":
  case "bz2":
  case "lz":
  case "lz4":
  case "lzma":
  case "lzo":
  case "zip":
  case "7z":
  case "rar":
  case "iso":
  case "br":
  case "sz":
  case "zst":
  for(let i = 0; i < fileCollection.length; i++)
    fileCollection[i].innerHTML = "archive";
    break;
  /* Executables */
  case "appimage":
  case "jar":
  case "run":
  case "sh":
  case "jar":
  case "py":
  case "exe":
  case "dmg":
  case "apk":
  case "out":
  case "app":
  case "cmd":
  case "bat":
  case "command":
  case "vbs":
  case "ps1":
  for(let i = 0; i < fileCollection.length; i++)
    fileCollection[i].innerHTML = "program";
    break;
  /* Audio */
  case "pcm":
  case "wav":
  case "aiff":
  case "mp3":
  case "aac":
  case "ogg":
  case "wma":
  case "flac":
  case "alac":
  case "opus":
  for(let i = 0; i < fileCollection.length; i++)
    fileCollection[i].innerHTML = "audio file";
    break;
  /* Video */
  case "mp4":
  case "mov":
  case "avi":
  case "flv":
  case "mkv":
  case "wmv":
  case "avchd":
  case "webm":
  case "mpeg":
  case "m4a":
  for(let i = 0; i < fileCollection.length; i++)
    fileCollection[i].innerHTML = "video";
    break;
  /* Web page */
  case "html":
  case "htm":
  case "php":
  for(let i = 0; i < fileCollection.length; i++)
    fileCollection[i].innerHTML = "web page";
    break;
  default:
    break;
};
