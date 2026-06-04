# Troubleshooting Guide

## Common Issues and Solutions

---

## Application Issues

### Tasks Not Saving

**Problem**: Tasks disappear after page refresh

**Solutions**:
1. Check if localStorage is enabled
   - Open DevTools (F12)
   - Go to Application tab
   - Check LocalStorage
   
2. Clear browser cache
   - Chrome: Ctrl+Shift+Delete
   - Firefox: Ctrl+Shift+Delete
   - Safari: Cmd+Shift+Delete

3. Try incognito/private mode
   - If it works, clear browser data

4. Check storage quota
   - May need to export and clear old tasks

### Charts Not Displaying

**Problem**: Analytics charts show blank

**Solutions**:
1. Refresh the page
   - F5 or Ctrl+R

2. Check browser console for errors
   - Press F12
   - Check Console tab
   - Look for red error messages

3. Ensure JavaScript is enabled
   - Check browser settings
   - Reload page

4. Try different browser
   - Test in Chrome, Firefox, Safari

### Search Not Working

**Problem**: Search returns no results

**Solutions**:
1. Check search term spelling
   - Search is case-insensitive
   - Try partial matches

2. Verify tasks exist
   - Check task list
   - Add test task

3. Clear search field
   - Click X or press Esc
   - Try again

4. Refresh page
   - May fix temporary glitch

### Notifications Not Appearing

**Problem**: Success/info messages don't show

**Solutions**:
1. Check notification volume
   - Ensure not muted

2. Look at top-right corner
   - Notifications appear there

3. Check browser notifications settings
   - May be blocked by browser

4. Wait 3 seconds
   - Notifications auto-dismiss

---

## Performance Issues

### Slow Loading

**Problem**: Application takes long time to load

**Solutions**:
1. Check internet connection
   - Test speed at speedtest.net

2. Clear browser cache
   - Ctrl+Shift+Delete

3. Disable browser extensions
   - May interfere with loading

4. Try different browser
   - Isolate the issue

5. Check device resources
   - Close other applications

### Slow Search/Filter

**Problem**: Search takes too long

**Solutions**:
1. Reduce number of tasks
   - Archive old tasks
   - Export and clear

2. Use more specific search
   - Narrow down results

3. Restart browser
   - Clear memory

4. Update browser
   - May have performance improvements

### Memory Issues

**Problem**: Browser uses too much memory

**Solutions**:
1. Reduce task count
   - Delete old tasks
   - Export and archive

2. Close other tabs
   - Free up memory

3. Restart browser
   - Clear memory cache

4. Update browser
   - Latest version optimized

---

## Data Issues

### Lost Data

**Problem**: Tasks disappeared

**Solutions**:
1. Check if exported
   - Look for JSON file
   - Import from backup

2. Check browser history
   - Ctrl+H
   - Look for recent visits

3. Check Downloads folder
   - May have exported file

4. Contact support
   - Provide details

### Duplicate Tasks

**Problem**: Same task appears multiple times

**Solutions**:
1. Delete duplicates manually
   - Click delete button

2. Export and re-import
   - Clean up data

3. Clear browser cache
   - May fix display issue

### Corrupted Data

**Problem**: Tasks show strange characters

**Solutions**:
1. Export data
   - Save current state

2. Clear all tasks
   - Start fresh

3. Import from backup
   - Restore from export

4. Contact support
   - Report issue

---

## Browser-Specific Issues

### Chrome Issues

**Blank Page**:
- Clear cache: Ctrl+Shift+Delete
- Disable extensions
- Try incognito mode

**Slow Performance**:
- Check extensions
- Clear cache
- Update Chrome

### Firefox Issues

**localStorage Not Working**:
- Check privacy settings
- Disable tracking protection
- Allow site in settings

**Performance**:
- Clear cache
- Disable add-ons
- Update Firefox

### Safari Issues

**Not Loading**:
- Clear cache: Cmd+Shift+Delete
- Disable extensions
- Try private mode

**localStorage Issues**:
- Check privacy settings
- Enable cookies
- Check storage quota

### Edge Issues

**Performance**:
- Clear cache
- Disable extensions
- Update Edge

---

## Mobile Issues

### Touch Not Working

**Problem**: Buttons don't respond to touch

**Solutions**:
1. Tap more precisely
   - Ensure full contact

2. Increase touch target size
   - Use browser zoom

3. Try different browser
   - Safari, Chrome, Firefox

4. Restart device
   - Clear memory

### Keyboard Issues

**Problem**: Mobile keyboard not showing

**Solutions**:
1. Tap input field directly
   - Should trigger keyboard

2. Try different input field
   - May be specific issue

3. Restart device
   - Clear keyboard cache

### Responsive Layout

**Problem**: Layout broken on mobile

**Solutions**:
1. Rotate device
   - Try landscape/portrait

2. Zoom out
   - Pinch to zoom

3. Try different browser
   - Check compatibility

4. Update browser
   - Latest version

---

## Export/Import Issues

### Export Not Working

**Problem**: Export button doesn't work

**Solutions**:
1. Check browser permissions
   - Allow downloads

2. Check disk space
   - Ensure enough space

3. Try different browser
   - Isolate issue

4. Disable ad blocker
   - May block downloads

### Import Not Working

**Problem**: Import doesn't load file

**Solutions**:
1. Check file format
   - Must be JSON

2. Verify file size
   - Shouldn't be huge

3. Try different file
   - Test with sample

4. Check browser console
   - Look for error messages

### File Corrupted

**Problem**: Imported file causes errors

**Solutions**:
1. Export again
   - Create fresh backup

2. Edit JSON manually
   - Fix formatting

3. Contact support
   - Report issue

---

## Theme Issues

### Dark Mode Not Working

**Problem**: Dark mode doesn't activate

**Solutions**:
1. Click toggle button
   - Should switch themes

2. Refresh page
   - Reload settings

3. Clear browser cache
   - May have old settings

4. Try different browser
   - Isolate issue

### Light Mode Issues

**Problem**: Text not readable in light mode

**Solutions**:
1. Increase browser zoom
   - Ctrl+Plus

2. Adjust monitor brightness
   - May help readability

3. Switch to dark mode
   - Better contrast

---

## Network Issues

### Can't Access Site

**Problem**: "Cannot reach server" error

**Solutions**:
1. Check internet connection
   - Try other websites

2. Check URL
   - Verify correct address

3. Try different network
   - WiFi vs mobile

4. Wait and retry
   - Server may be down

### Slow Connection

**Problem**: Site loads very slowly

**Solutions**:
1. Check internet speed
   - May need faster connection

2. Try different network
   - WiFi vs mobile

3. Close other applications
   - Free up bandwidth

4. Try different time
   - Less congestion

---

## Getting Help

### Before Contacting Support

1. Check this guide
   - May find solution

2. Check browser console
   - F12 → Console tab
   - Note any errors

3. Try different browser
   - Isolate issue

4. Clear cache
   - May fix issue

### Contact Information

- **Email**: [xannrlcs@gmail.com](mailto:xannrlcs@gmail.com)
- **GitHub Issues**: [Report Bug](https://github.com/xenon231tech/xenon-airdop-task-tracker/issues)
- **Response Time**: 24-48 hours

### Provide Information

When reporting issues, include:
- Browser and version
- Operating system
- Steps to reproduce
- Error messages
- Screenshots if possible

---

## FAQ

### Q: Where is my data stored?
**A**: In your browser's localStorage. It's local to your device.

### Q: How do I backup my data?
**A**: Click Export to download a JSON file.

### Q: Can I use this on multiple devices?
**A**: Yes, by exporting and importing on each device.

### Q: Is my data secure?
**A**: Yes, it never leaves your device.

### Q: What if I clear my browser cache?
**A**: All data will be deleted. Use Export first.

### Q: Can I sync across devices?
**A**: Not automatically, but you can export/import.

### Q: Is there a mobile app?
**A**: Not yet, but PWA support is planned.

### Q: Can I use offline?
**A**: Yes, the app works offline once loaded.

---

**Last Updated:** June 4, 2024
