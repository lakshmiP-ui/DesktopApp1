const {contextBridge, ipcRenderer} = require("electon");
contextBridge.exposeInMainWorld("electron API",{
    loadPage: (page)=>ipcRenderer.send("load-page",page),
});