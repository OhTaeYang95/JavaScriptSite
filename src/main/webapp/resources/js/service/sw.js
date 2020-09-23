"use strict";

if ('serviceWorker' in navigator && 'PushManager' in window) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('http://web.xn--car-2r7mh0wi12a.com/service-worker.js')
            .then(function (success) {
                console.log('[Service Worker 등록 완료]', success);
            })
            .catch(function (error) {
                console.log('[Service Worker 등록 실패]', error);
            });
    });
}