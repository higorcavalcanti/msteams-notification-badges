class UnreadNotificationWatcher {
    static onChange = async (
        documentBody, // HTML document
        callback      // callback action 
    ) => {
        setInterval(
            () => {
                const newUnreadNotificationsCount = 
                    MsTeamsHTMLParser.getUnreadNotificationsCount(documentBody) 
                    ?? currentUnreadNotificationsCount;

                if (BadgeStorage.get() !== newUnreadNotificationsCount) {
                    BadgeStorage.set(newUnreadNotificationsCount);
                    callback();
                }
            }, 
            1000
        );
    }
}