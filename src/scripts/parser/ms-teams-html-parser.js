class MsTeamsHTMLParser {
    static TITLE_NOTIFICATION_PATTERN = /\(([0-9]*)\)/;

    static getUnreadNotificationsCount = (
        documentBody // HTML document
    ) => parseInt(
        documentBody.title.
            match(MsTeamsHTMLParser.TITLE_NOTIFICATION_PATTERN)?.
            at(1)
        ?? 0
    );
}