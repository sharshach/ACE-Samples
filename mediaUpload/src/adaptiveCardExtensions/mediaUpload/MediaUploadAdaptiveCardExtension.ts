import type { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseAdaptiveCardExtension } from '@microsoft/sp-adaptive-card-extension-base';
import { CardView } from './cardView/CardView';
import { QuickView } from './quickView/QuickView';
import { MediaUploadPropertyPane } from './MediaUploadPropertyPane';

export interface IMediaUploadAdaptiveCardExtensionProps {
  title: string;
}

export interface IMediaUploadAdaptiveCardExtensionState {
  selectedFile?: File;
  uploadStatus?: string;
  isProcessing?: boolean;
}

const CARD_VIEW_REGISTRY_ID: string = 'MediaUpload_CARD_VIEW';
export const QUICK_VIEW_REGISTRY_ID: string = 'MediaUpload_QUICK_VIEW';

export default class MediaUploadAdaptiveCardExtension extends BaseAdaptiveCardExtension<
  IMediaUploadAdaptiveCardExtensionProps,
  IMediaUploadAdaptiveCardExtensionState
> {
  private _deferredPropertyPane: MediaUploadPropertyPane;

  public onInit(): Promise<void> {
    this.state = {
      selectedFile: undefined,
      uploadStatus: undefined,
      isProcessing: false
    };

    // registers the card view to be shown in a dashboard
    this.cardNavigator.register(CARD_VIEW_REGISTRY_ID, () => new CardView());
    // registers the quick view to open via QuickView action
    this.quickViewNavigator.register(QUICK_VIEW_REGISTRY_ID, () => new QuickView());

    return Promise.resolve();
  }

  protected loadPropertyPaneResources(): Promise<void> {
    return import(
      /* webpackChunkName: 'MediaUpload-property-pane'*/
      './MediaUploadPropertyPane'
    )
      .then(
        (component) => {
          this._deferredPropertyPane = new component.MediaUploadPropertyPane();
        }
      );
  }

  protected renderCard(): string | undefined {
    return CARD_VIEW_REGISTRY_ID;
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return this._deferredPropertyPane?.getPropertyPaneConfiguration();
  }
}
