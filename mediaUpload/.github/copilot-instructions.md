# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview

This is a SharePoint Framework (SPFx) project that creates an Adaptive Card Extension for media upload functionality. The project uses:

- **Framework**: SharePoint Framework (SPFx) v1.21.1
- **Component Type**: Adaptive Card Extension
- **Template**: Generic Card Template
- **Language**: TypeScript
- **Build System**: Gulp with Webpack

## Development Guidelines

### SharePoint Framework Best Practices
- Follow SPFx development patterns and conventions
- Use the SharePoint Framework APIs for SharePoint integration
- Implement proper error handling and logging
- Follow Microsoft's coding standards for TypeScript

### Adaptive Card Extension Development
- Use the Adaptive Card Extension base classes
- Implement proper state management between card views and quick views
- Follow the Adaptive Card schema for UI components
- Handle card actions and navigation properly

### Code Organization
- Keep components modular and reusable
- Use proper TypeScript interfaces and types
- Follow the existing project structure
- Use the provided localization system for strings

### Testing and Deployment
- Use `gulp serve` for local development
- Use `gulp build` for production builds
- Test with SharePoint Workbench
- Follow SPFx packaging guidelines for deployment

## File Structure
- `/src/adaptiveCardExtensions/mediaUpload/` - Main component files
- `/src/adaptiveCardExtensions/mediaUpload/loc/` - Localization files
- `/config/` - Configuration files
- `/gulpfile.js` - Build configuration
