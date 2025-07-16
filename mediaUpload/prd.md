# Media Upload Test - Simple Implementation

## Overview
Simple test implementation for media upload functionality in SPFx Adaptive Card Extension. The goal is to test basic file upload and camera functionality on mobile devices.

## Requirements

### Card View - 2 Buttons
1. **Upload Button** - Opens file picker
2. **Take Photo Button** - Opens camera (mobile) or file picker (desktop)

### Quick View - 2 Buttons  
1. **Upload Button** - Opens file picker
2. **Take Photo Button** - Opens camera (mobile) or file picker (desktop)

## Technical Implementation

### Files to Modify
- `/src/adaptiveCardExtensions/mediaUpload/cardView/CardView.ts`
- `/src/adaptiveCardExtensions/mediaUpload/quickView/QuickView.ts`
- `/src/adaptiveCardExtensions/mediaUpload/quickView/template/QuickViewTemplate.json`

### Basic Functionality
- **File Upload**: HTML5 File API with `<input type="file">`
- **Camera Access**: HTML5 `<input type="file" capture="environment">` for mobile
- **Fallback**: Regular file picker if camera not available
- **File Types**: Images only (JPEG, PNG, GIF)
- **Simple Validation**: Basic file type and size checks

### Simple UI Layout

#### Card View
```
┌─────────────────────────────────┐
│         Media Upload            │
│                                 │
│   [Upload File] [Take Photo]    │
│                                 │
│       [Status Message]          │
└─────────────────────────────────┘
```

#### Quick View
```
┌─────────────────────────────────┐
│         Media Upload            │
│                                 │
│   [Upload File] [Take Photo]    │
│                                 │
│       [File Selected: xxx]      │
│                                 │
│          [Process File]         │
└─────────────────────────────────┘
```

## Testing Focus
- Test if camera opens on mobile devices
- Test file picker functionality
- Test basic file selection and display
- Test on different browsers (Chrome, Safari, Edge)

## Implementation Steps
1. Add 2 buttons to Card View
2. Add 2 buttons to Quick View
3. Implement file picker logic
4. Add camera capture attribute for mobile
5. Add basic file validation
6. Test on mobile and desktop

## Success Criteria
- ✅ Buttons render correctly
- ✅ File picker opens on "Upload" button
- ✅ Camera opens on mobile for "Take Photo" button
- ✅ File picker opens on desktop for "Take Photo" button
- ✅ Selected files are displayed
- ✅ Basic error handling works

---
Docs
Media upload in Adaptive Card Extension
08/29/2024
Microsoft added support for an action to upload media, unique to Viva Connections, in the SharePoint Framework (SPFx) v1.15.2 release.

 Note

This tutorial also assumes that you've already built an SPFx Adaptive Card Extension.

To learn how to create your first SPFx Adaptive Card Extension, try out this tutorial.

Action type for media uploads
Select Media
Allows users to upload media content via an Adaptive Card Extension (ACE). The current size limitation is 1 MB per image. A user can specify any image type to be uploaded.

 Warning

If an image type isn't specified, then an error indicating only images can be uploaded is displayed.

The ACE action for Select Media is: VivaAction.SelectMedia.

JSON

Copy
{
  "type": "VivaAction.SelectMedia",
  "id": "Select Media",
  "title": "Select Files",
  "parameters": {
    "mediaType": "MediaType.Image"
  }
}
The parameters that it takes are as follows:

mediaType: Currently set as image by default. Audio and documents, such as PDFs, are supported as well.
allowMultipleCapture [OPTIONAL]: Enables multiple files to be added at once.
This is enabled by default.
maxSizePerFile [OPTIONAL]: The limitation for the file size to be uploaded, suggested limitation is 1 MB.
supportedFileFormats [OPTIONAL]: Space-delimited format on allowed types. If none are supplied, then standard image files are used for type checking.
Any file that is attempted to be upload that doesn't match the allowed type results in an error message stating: This isn't a file type we support. You can only upload images.
TypeScript

Copy
{
    /**
     * Specify the specific media type that should be selected
     */
    mediaType: MediaType;
    /**
     * Allow multiple images to be selected.
     */
    allowMultipleCapture?: boolean;
    /**
     * Max file size that can be uploaded.
     */
    maxSizePerFile?: number;
    /**
     * File formats supported for upload.
     */
    supportedFileFormats?: string[];
}
 Warning

If a user uploads a file that is not supported in the format parameters, an error code of InCorrectFileFormat is thrown.

Tutorial and Examples
You can take a look at this tutorial which goes over a step-by-step guide on how to create a card with the available media upload action.

Upload an image

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
      "mediaType": MediaType.Image
    }
  }
]
Upload multiple images

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
        "mediaType": MediaType.Image,
        "allowMultipleCapture": true
    }
  }
]
Upload only JPG images

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
      "mediaType": MediaType.Image,
      "supportedFileFormats": "jpg"
    }
  }
]
Upload allow only small images to be uploaded

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
      "mediaType": MediaType.Image,
      "supportedFilemaxSizePerFileFormats": 1000
    }
  }
]
Access media upload action via card-designer card's property pane
If you don't want to write up a new ACE but still want to see the media upload in action, be sure to explore this tutorial which allows you to explore this through the property pane.

 Note

The media upload action can be added on the Card View, buttons of the Card View, or inside the Quick View itself.

Availability of media upload action
Action	Viva Connection Desktop	Viva Connections Mobile	Browser
Select Media	Supported	Supported	Supported
See Also
Microsoft Learning: Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections
Additional resources
Documentation

Adaptive Cards Tools - Adaptive Cards


Templating Overview - Adaptive Cards


Designing Adaptive Cards for your app - Teams

Learn about Adaptive Cards and its types and how to design Adaptive Cards with Adaptive Card Designer, Microsoft Teams UI Kit, and Adaptive Card templates.

Show 5 more
Training

Module

Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections - Training

This module will teach you how to create custom Adaptive Card Extensions (ACEs) with the SharePoint Framework (SPFx) for Viva Connections dashboards. These ACEs will work in all Viva Connections clients, including desktop and mobile apps.
----
Media upload in Adaptive Card Extension
08/29/2024
Microsoft added support for an action to upload media, unique to Viva Connections, in the SharePoint Framework (SPFx) v1.15.2 release.

 Note

This tutorial also assumes that you've already built an SPFx Adaptive Card Extension.

To learn how to create your first SPFx Adaptive Card Extension, try out this tutorial.

Action type for media uploads
Select Media
Allows users to upload media content via an Adaptive Card Extension (ACE). The current size limitation is 1 MB per image. A user can specify any image type to be uploaded.

 Warning

If an image type isn't specified, then an error indicating only images can be uploaded is displayed.

The ACE action for Select Media is: VivaAction.SelectMedia.

JSON

Copy
{
  "type": "VivaAction.SelectMedia",
  "id": "Select Media",
  "title": "Select Files",
  "parameters": {
    "mediaType": "MediaType.Image"
  }
}
The parameters that it takes are as follows:

mediaType: Currently set as image by default. Audio and documents, such as PDFs, are supported as well.
allowMultipleCapture [OPTIONAL]: Enables multiple files to be added at once.
This is enabled by default.
maxSizePerFile [OPTIONAL]: The limitation for the file size to be uploaded, suggested limitation is 1 MB.
supportedFileFormats [OPTIONAL]: Space-delimited format on allowed types. If none are supplied, then standard image files are used for type checking.
Any file that is attempted to be upload that doesn't match the allowed type results in an error message stating: This isn't a file type we support. You can only upload images.
TypeScript

Copy
{
    /**
     * Specify the specific media type that should be selected
     */
    mediaType: MediaType;
    /**
     * Allow multiple images to be selected.
     */
    allowMultipleCapture?: boolean;
    /**
     * Max file size that can be uploaded.
     */
    maxSizePerFile?: number;
    /**
     * File formats supported for upload.
     */
    supportedFileFormats?: string[];
}
 Warning

If a user uploads a file that is not supported in the format parameters, an error code of InCorrectFileFormat is thrown.

Tutorial and Examples
You can take a look at this tutorial which goes over a step-by-step guide on how to create a card with the available media upload action.

Upload an image

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
      "mediaType": MediaType.Image
    }
  }
]
Upload multiple images

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
        "mediaType": MediaType.Image,
        "allowMultipleCapture": true
    }
  }
]
Upload only JPG images

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
      "mediaType": MediaType.Image,
      "supportedFileFormats": "jpg"
    }
  }
]
Upload allow only small images to be uploaded

In your template json file, add the following action:

JSON

Copy
"actions": [
  {
    "type": "VivaAction.SelectMedia",
    "id": "Select Media",
    "title": "Upload Image",
    "parameters": {
      "mediaType": MediaType.Image,
      "supportedFilemaxSizePerFileFormats": 1000
    }
  }
]
Access media upload action via card-designer card's property pane
If you don't want to write up a new ACE but still want to see the media upload in action, be sure to explore this tutorial which allows you to explore this through the property pane.

 Note

The media upload action can be added on the Card View, buttons of the Card View, or inside the Quick View itself.

Availability of media upload action
Action	Viva Connection Desktop	Viva Connections Mobile	Browser
Select Media	Supported	Supported	Supported
See Also
Microsoft Learning: Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections
Additional resources
Documentation

Adaptive Cards Tools - Adaptive Cards


Templating Overview - Adaptive Cards


Designing Adaptive Cards for your app - Teams

Learn about Adaptive Cards and its types and how to design Adaptive Cards with Adaptive Card Designer, Microsoft Teams UI Kit, and Adaptive Card templates.

Show 5 more
Training

Module

Create Adaptive Card Extensions (ACE) for Microsoft Viva Connections - Training

This module will teach you how to create custom Adaptive Card Extensions (ACEs) with the SharePoint Framework (SPFx) for Viva Connections dashboards. These ACEs will work in all Viva Connections clients, including desktop and mobile apps.
---