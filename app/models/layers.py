import tensorflow as tf

class L2Normalize(tf.keras.layers.Layer):
    def __init__(self, axis=1, **kwargs):
        super(L2Normalize, self).__init__(**kwargs)
        self.axis = axis

    def call(self, inputs):
        return tf.linalg.l2_normalize(inputs, axis=self.axis)

    def get_config(self):
        config = super(L2Normalize, self).get_config()
        config.update({"axis": self.axis})
        return config

    @classmethod
    def from_config(cls, config):
        return cls(**config)