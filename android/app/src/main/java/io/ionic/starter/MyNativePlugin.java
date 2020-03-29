package io.ionic.starter;

import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.ui.Toast;

@NativePlugin
public class MyNativePlugin extends Plugin {

    @PluginMethod()
    public void customCall(PluginCall call) {
        String message = call.getString("message");

        Toast.show(getActivity(), message);

        call.success();
    }
}
