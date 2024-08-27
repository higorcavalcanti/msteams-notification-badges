const main = async () => {
    // Check for navigator.setAppBadge availability
    if (navigator.setAppBadge) {

        // When new notifications is display in Title
        UnreadNotificationWatcher.onChange(
            document,
            () => {
                BadgeViewer.updateTaskbarBadgeIcon();
                BadgeViewer.updateOverlayCount();
                BadgeViewer.drawAttention();
            }
        );

        WindowActivation.onFocus(() => {
            BadgeViewer.updateTaskbarBadgeIcon();
            BadgeViewer.hideOverlay();
        });

        WindowActivation.onBlur(() => {
            BadgeViewer.createOverlay();
        });
    }
}
main();
