
package cc.codegen.plugins.BizXMLToCodeM

import cc.codegen.plugins.BizXMLToCodeM.handler.BizXMLToCodeMHandler
import cc.codegen.plugins.specification.CodeGenInitializer
import cc.codegen.plugins.specification.CodeGenPluginHandler

class LightingBoot extends CodeGenInitializer {
    @Override
    List<CodeGenPluginHandler> getHandlers() {
        return [
                new BizXMLToCodeMHandler()
        ]
    }
}
