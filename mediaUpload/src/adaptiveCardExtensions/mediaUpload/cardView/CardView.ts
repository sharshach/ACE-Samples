import {
  BaseComponentsCardView,
  ComponentsCardViewParameters,
  BasicCardView,
  IExternalLinkCardAction,
  IQuickViewCardAction
} from '@microsoft/sp-adaptive-card-extension-base';
import * as strings from 'MediaUploadAdaptiveCardExtensionStrings';
import {
  IMediaUploadAdaptiveCardExtensionProps,
  IMediaUploadAdaptiveCardExtensionState,
  QUICK_VIEW_REGISTRY_ID
} from '../MediaUploadAdaptiveCardExtension';

export class CardView extends BaseComponentsCardView<
  IMediaUploadAdaptiveCardExtensionProps,
  IMediaUploadAdaptiveCardExtensionState,
  ComponentsCardViewParameters
> {
  public get cardViewParameters(): ComponentsCardViewParameters {
    const statusMessage = this.state.selectedFile 
      ? `${strings.FileSelected.replace('{0}', this.state.selectedFile.name)}`
      : this.state.uploadStatus || strings.ReadyToUpload;

    return BasicCardView({
      cardBar: {
        componentName: 'cardBar',
        title: this.properties.title
      },
      header: {
        componentName: 'text',
        text: statusMessage
      },
      footer: {
        componentName: 'cardButton',
        title: strings.QuickViewButton,
        action: {
          type: 'QuickView',
          parameters: {
            view: QUICK_VIEW_REGISTRY_ID
          }
        }
      }
    });
  }

  public get onCardSelection(): IQuickViewCardAction | IExternalLinkCardAction | undefined {
    return {
      type: 'QuickView',
      parameters: {
        view: QUICK_VIEW_REGISTRY_ID
      }
    };
  }
}
