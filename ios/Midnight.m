#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(Midnight, NSObject)

+ (BOOL)requiresMainQueueSetup {
    return NO;
}

RCT_EXTERN_METHOD(triggerDayChangedEvent)
RCT_EXTERN_METHOD(triggerHourChangedEvent)

@end
