import { ISPFxAdaptiveCard, BaseAdaptiveCardQuickView, IActionArguments, ISubmitActionArguments, ISelectMediaActionArguments } from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'MediaUploadAdaptiveCardExtensionStrings';
import {
  IMediaUploadAdaptiveCardExtensionProps,
  IMediaUploadAdaptiveCardExtensionState
} from '../MediaUploadAdaptiveCardExtension';

export interface IQuickViewData {
  title: string;
  subTitle: string;
  status: string;
  uploadButtonText: string;
  takePhotoButtonText: string;
  processButtonText: string;
  hasFile: boolean;
}

export class QuickView extends BaseAdaptiveCardQuickView<
  IMediaUploadAdaptiveCardExtensionProps,
  IMediaUploadAdaptiveCardExtensionState,
  IQuickViewData
> {
  public get data(): IQuickViewData {
    const hasFile = !!this.state.selectedFile;
    const status = this.state.selectedFile 
      ? strings.FileSelected.replace('{0}', this.state.selectedFile.name)
      : this.state.uploadStatus || strings.NoFileSelected;

    return {
      title: strings.Title,
      subTitle: strings.SubTitle,
      status: status,
      uploadButtonText: strings.UploadButton,
      takePhotoButtonText: strings.TakePhotoButton,
      processButtonText: strings.ProcessButton,
      hasFile: hasFile
    };
  }

  public get template(): ISPFxAdaptiveCard {
    return require('./template/QuickViewTemplate.json');
  }

  public onAction(action: IActionArguments): void {
    if (action.type === 'VivaAction.SelectMedia') {
      this.handleMediaSelection(action as ISelectMediaActionArguments);
    } else if (action.type === 'Submit') {
      const submitAction = action as ISubmitActionArguments;
      const actionData = submitAction.data;

      switch (actionData.action) {
        case 'processFile':
          this.handleProcessFile();
          break;
      }
    }
  }

  private handleMediaSelection(action: ISelectMediaActionArguments): void {
    const media = action.media;
    
    if (media && media.length > 0) {
      const selectedFile = media[0];
      
      // Update state with selected file information
      this.setState({
        selectedFile: {
          name: selectedFile.fileName || 'Unknown file',
          size: selectedFile.content ? selectedFile.content.length : 0,
          type: 'image/*'
        } as File,
        uploadStatus: `Selected: ${selectedFile.fileName || 'Unknown file'}`
      });
    } else {
      this.setState({
        selectedFile: undefined,
        uploadStatus: 'No file selected'
      });
    }
  }

  private handleProcessFile(): void {
    if (!this.state.selectedFile) {
      return;
    }

    this.setState({
      isProcessing: true,
      uploadStatus: 'Processing file...'
    });

    // Simulate file processing
    setTimeout(() => {
      this.setState({
        isProcessing: false,
        uploadStatus: `Successfully processed: ${this.state.selectedFile?.name}`
      });
    }, 2000);
  }
}
